const upload = (state = [], action) => {
  switch (action.type) {
    case "UPLOAD_FILE":
      return [
        ...state,
        {
          id: action.id,
          filePath: action.filePath,
          file: action.file
        }
      ];
    default:
      return state;
  }
};

export default upload;
