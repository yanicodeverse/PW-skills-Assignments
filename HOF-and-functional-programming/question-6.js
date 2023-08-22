function linkedinProfileValidate(url) {
    const profileCheckRegEx = /in\/[a-zA-Z0-9_-]{5,29}[a-zA-Z0-9]$/i;
    const profileRegex = new RegExp(/^https?:\/\/www\.linkedin\.com\/in\/(?<profileID>[\w_-\d]{5,29})(?<endWith>[A-z\d])$/)

    const group = profileRegex.exec(url)

    if (group?.groups) {
        return {
            profileID: profileCheckRegEx.test(url),
            length: group?.groups.profileID.length
        }
    } else {
        return {
            profileID: profileCheckRegEx.test(url)
        }
    }

}
const url1 = "https://www.linkedin.com/in/johndoe123";
const url2 = "https://www.linkedin.com/in/jane-doe_456";
const url3 = "https://www.linkedin.com/in/joh"; // invalid, profile ID too short
const url4 =
    "https://www.linkedin.com/in/johndoe123456789012345678901234567890"; // invalid, profile ID too long

const url5 = "https://www.linkedin.com/in/john-doe";

[url1, url2, url3, url4, url5].map(url => console.log(linkedinProfileValidate(url)))