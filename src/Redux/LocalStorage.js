export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("userInfo");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (userInfo) => {
    try {
      const serializesState = JSON.stringify(userInfo);
      localStorage.setItem("userInfo", serializesState);
    } catch (err) {
      console.log(err);
    }
  };