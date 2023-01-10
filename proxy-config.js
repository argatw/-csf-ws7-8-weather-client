module.exports = [
    {
      context: [ '/**' ], //match these request
      target: 'http://localhost:8080', //SpringBoot!
      secure: false
    }
  ]