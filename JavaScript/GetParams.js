const GetParams = (ParamName) => {
  const params = window.location.search.toString().split("&");
  for (let i = 0; i < params.length; i++) {
    let param = params[i].split("=");
    if (ParamName == param[0]) {
      return param[1];
    }
  }
  return null;
};
