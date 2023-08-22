function urlValidator(url) {
    const urlRegex = new RegExp(/^https?:\/\/[\w\d]+\.[A-z]+\.(com|co|(co\.in))$/)
    return urlRegex.test(url) ? 'valid url' : "Invalid Url"
}

[
    'https://www.google.com',
    'https://ww.google.com',
    'https://www.google.com.in',
    'http://www.google.com',
    'https://www123.google.com',
    'https://_.google.com',
    'https://123www.google.com',
    'https://www.google.co',
    'https://www.google.co.in',
    'https://www.google.com.in',
].map((url, index) => console.log(index, urlValidator(url)))