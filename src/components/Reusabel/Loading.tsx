
const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291c-1.116 2.862-3.735 4.879-6.84 5.157V6.708a7.963 7.963 0 014 0v5.001zM6.839 6.708v5.001c-3.104-.278-5.723-2.295-6.839-5.157h5.125z"></path>
        </svg>
      </div>
    );
  };
  
  export default Loading;
  