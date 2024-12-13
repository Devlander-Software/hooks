import { useReducer } from "react"

export interface FormState<TFormValues> {
  /** Stores current values of form inputs */
  formValues: TFormValues
  /** Stores error messages for each form field */
  formErrors: Partial<Record<keyof TFormValues, string>>
}

/**
 * Action types for updating form state in the reducer
 */
export type FormAction<TFormValues> =
  | {
      type: "SET_FIELD"
      field: keyof TFormValues
      value: TFormValues[keyof TFormValues]
    }
  | { type: "SET_ERRORS"; errors: Partial<Record<keyof TFormValues, string>> }
  | { type: "RESET_FORM"; values: TFormValues }

/**
 * Reducer function for managing form state
 */
export function formReducer<TFormValues>(
  state: FormState<TFormValues>,
  action: FormAction<TFormValues>,
): FormState<TFormValues> {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.field]: action.value,
        },
      }
    case "SET_ERRORS":
      return {
        ...state,
        formErrors: action.errors,
      }
    case "RESET_FORM":
      return {
        ...state,
        formValues: action.values,
        formErrors: {}, // Clear errors on reset
      }
    default:
      return state
  }
}

export interface UseFormManagerReturn<TFormValues> {
  /** Current form state, including values and errors */
  formState: FormState<TFormValues>
  /** Handler for updating a form field */
  handleChange: (input: {
    name: keyof TFormValues
    value: TFormValues[keyof TFormValues]
  }) => void
  /** Submits the form after validation */
  handleSubmit: () => void
  /** Sets custom error messages for fields */
  setFormErrors: (errors: Partial<Record<keyof TFormValues, string>>) => void
  /** Resets the form to its initial values */
  resetForm: () => void
  /** Provides standardized props for TextInput components */
  getInputProps: (name: keyof TFormValues) => {
    value: TFormValues[keyof TFormValues]
    onChangeText: (text: string) => void
    onSubmitEditing?: () => void
    onFocus?: () => void
    onBlur?: () => void
  }
}

/**
 * Validator type that returns an error message if validation fails
 */
type Validator<T> = (value: T) => string | null

/**
 * Custom hook for managing form state and validation. Compatible with both React and React Native,
 * this hook provides state management for form values and errors, customizable field validation,
 * and event handlers for input actions.
 *
 * @template TFormValues - The structure of the form values, e.g., `{ email: string; password: string; }`
 *
 * @param initialValues - The initial values for form fields
 * @param onSubmit - Callback function to execute on form submission, called with current form values
 * @param validators - An optional object with validators for each field; keys should match field names
 *
 * @returns An object containing form state, input handlers, and utilities
 *
 * @example
 * const { formState, handleChange, handleSubmit, getInputProps } = useFormManager(
 *   { email: '', password: '' },
 *   (values) => console.log(values),
 *   { email: (value) => !value ? 'Required' : null }
 * );
 */
export function useFormManager<TFormValues>(
  initialValues: TFormValues,
  onSubmit: (values: TFormValues) => void,
  validators: Partial<
    Record<keyof TFormValues, Validator<TFormValues[keyof TFormValues]>>
  > = {},
): UseFormManagerReturn<TFormValues> {
  const [state, dispatch] = useReducer(formReducer<TFormValues>, {
    formValues: initialValues,
    formErrors: {},
  })

  /**
   * Updates a specific field's value in the form state
   * @param input - Object with `name` (field name) and `value` (new field value)
   */
  const handleChange = (input: {
    name: keyof TFormValues
    value: TFormValues[keyof TFormValues]
  }) => {
    const { name, value } = input
    dispatch({ type: "SET_FIELD", field: name, value })
  }

  /**
   * Validates all form fields based on the provided validators
   * @returns `true` if no errors are found; otherwise `false`
   */
  const validate = (): boolean => {
    const errors: Partial<Record<keyof TFormValues, string>> = {}

    for (const key in validators) {
      if (validators.hasOwnProperty(key)) {
        const fieldKey = key as keyof TFormValues
        const validator = validators[fieldKey]
        const error = validator ? validator(state.formValues[fieldKey]) : null
        if (error) errors[fieldKey] = error
      }
    }

    dispatch({ type: "SET_ERRORS", errors })
    return Object.keys(errors).length === 0
  }

  /**
   * Submits the form if validation passes
   */
  const handleSubmit = () => {
    if (validate()) {
      onSubmit(state.formValues)
    }
  }

  /**
   * Sets custom error messages for specific form fields
   * @param errors - Object containing field-specific error messages
   */
  const setFormErrors = (
    errors: Partial<Record<keyof TFormValues, string>>,
  ) => {
    dispatch({ type: "SET_ERRORS", errors })
  }

  /**
   * Resets the form to its initial values and clears errors
   */
  const resetForm = () => {
    dispatch({ type: "RESET_FORM", values: initialValues })
  }

  /**
   * Returns props for configuring a TextInput, including value and event handlers
   * @param name - The name of the form field
   * @returns Props for TextInput, compatible with React Native
   */
  const getInputProps = (name: keyof TFormValues) => ({
    value: state.formValues[name],
    onChangeText: (text: string) =>
      handleChange({ name, value: text as TFormValues[keyof TFormValues] }),
    onSubmitEditing: () => {
      const error = validators[name]?.(state.formValues[name])
      if (error) {
        dispatch({
          type: "SET_ERRORS",
          errors: { ...state.formErrors, [name]: error },
        })
      }
    },
    onFocus: () => {
      dispatch({
        type: "SET_ERRORS",
        errors: { ...state.formErrors, [name]: "" },
      })
    },
    onBlur: () => {
      const error = validators[name]?.(state.formValues[name])
      if (error) {
        dispatch({
          type: "SET_ERRORS",
          errors: { ...state.formErrors, [name]: error },
        })
      }
    },
  })

  return {
    formState: state,
    handleChange,
    handleSubmit,
    setFormErrors,
    resetForm,
    getInputProps,
  }
}
