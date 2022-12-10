const inValidRouteHandler = (req, res) => {
    return res.status(404).json({
      success: false,
      message: 'Invalid api URL',
      data: null,
    });
  };
  
  export { inValidRouteHandler };