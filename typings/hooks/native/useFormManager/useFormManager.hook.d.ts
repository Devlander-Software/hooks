export interface FormState<TFormValues> {
    /** Stores current values of form inputs */
    formValues: TFormValues;
    /** Stores error messages for each form field */
    formErrors: Partial<Record<keyof TFormValues, string>>;
}
/**
 * Action types for updating form state in the reducer
 */
export type FormAction<TFormValues> = {
    type: 'SET_FIELD';
    field: keyof TFormValues;
    value: TFormValues[keyof TFormValues];
} | {
    type: 'SET_ERRORS';
    errors: Partial<Record<keyof TFormValues, string>>;
} | {
    type: 'RESET_FORM';
    values: TFormValues;
};
/**
 * Reducer function for managing form state
 */
export declare function formReducer<TFormValues>(state: FormState<TFormValues>, action: FormAction<TFormValues>): FormState<TFormValues>;
export interface UseFormManagerReturn<TFormValues> {
    /** Current form state, including values and errors */
    formState: FormState<TFormValues>;
    /** Handler for updating a form field */
    handleChange: (input: {
        name: keyof TFormValues;
        value: TFormValues[keyof TFormValues];
    }) => void;
    /** Submits the form after validation */
    handleSubmit: () => void;
    /** Sets custom error messages for fields */
    setFormErrors: (errors: Partial<Record<keyof TFormValues, string>>) => void;
    /** Resets the form to its initial values */
    resetForm: () => void;
    /** Provides standardized props for TextInput components */
    getInputProps: (name: keyof TFormValues) => {
        value: TFormValues[keyof TFormValues];
        onChangeText: (text: string) => void;
        onSubmitEditing?: () => void;
        onFocus?: () => void;
        onBlur?: () => void;
    };
}
/**
 * Validator type that returns an error message if validation fails
 */
type Validator<T> = (value: T) => string | null;
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
export declare function useFormManager<TFormValues>(initialValues: TFormValues, onSubmit: (values: TFormValues) => void, validators?: Partial<Record<keyof TFormValues, Validator<TFormValues[keyof TFormValues]>>>): UseFormManagerReturn<TFormValues>;
export {};
