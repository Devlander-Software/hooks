interface UseChatGPTOptions {
    postApiEndpoint: string;
}
interface Message {
    sender: 'user' | 'bot';
    text: string;
}
declare function useChatGPT(options: UseChatGPTOptions): {
    messages: Message[];
    sendMessage: (message: string) => void;
};
export default useChatGPT;
