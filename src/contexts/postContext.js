const { createContext, useState } = require("react");

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
    const [currentPost, setCurrentPost] = useState(false);

    return (
        <PostContext.Provider value={{ currentPost, setCurrentPost }}>
            {children}
        </PostContext.Provider>
    );
}
