//@ts-ignore
// module.exports = function (migration) {
    // Create a new category field in the blog post content type.
    // const blogPost = migration.createContentType('blogPost').name('Blog Post');

    // blogPost.createField('title').type('Symbol').required(true).name('Title').validations([{ "size": { "max": 60 }}]);
    // blogPost.createField('teaser').type('Symbol').required(true).name('Teaser text');
    // blogPost.createField('text').type('RichText').required(true).name('Blog text');
    // blogPost.createField('slug').type('Symbol').required(true).name('URL Slug').validations([{ "unique": true }]);
    // blogPost.createField('image').type('Link').linkType('Asset').name('Image');
    // blogPost.createField('location').type('Symbol').name('Location').validations([{ "in": ["Europe", "US", "South America"]}]);

  // }

  //@ts-ignore
// module.exports = function (migration) {
//   const testimonial = migration.createContentType('testimonial').name('Testimonial');

//   testimonial.createField('heading').type('Symbol').name('Heading').validations([{ "size": { "max": 60 }}]);
//   testimonial.createField('quote').type('Symbol').required(true).name('Quote');
//   testimonial.createField('author').type('Symbol').required(true).name('Author');
//   testimonial.createField('link').type('Symbol').name('Link');
//   testimonial.createField('fontColor').type('Symbol').required(true).name('Font Color').validations([{ "in": ["White", "Black"]}]);
//   testimonial.createField('backgroundImage').type('Link').linkType('Asset').name('Background Image')
// }
 //@ts-ignore
module.exports = function (migration) {
  const homepage = migration.createContentType('homepage').name('Homepage');
// hero
 homepage.createField('heroHeading').type('Symbol').required(true).name('Hero Heading').validations([{ "size": { "max": 60 }}]);
 homepage.createField('heroSubHeading').type('Symbol').name('Hero Subheading').validations([{ "size": { "max": 60 }}]);
 homepage.createField('heroBackgroundImage').type('Link').linkType('Asset').name('Hero Background Image')
 

// textimage
 homepage.createField('module2Heading').type('Symbol').name('Module 2 Heading').required(true).validations([{ "size": { "max": 60 }}]);
 homepage.createField('module2Text').type('RichText').required(true).name('Module 2 Text');
 homepage.createField('module2ButtonText').type('Symbol').name('Module 2 Button Text').validations([{ "size": { "max": 15 }}]);
 homepage.createField('module2ButtonLink').type('Symbol').name('Module 2 Button Link').validations([{ "regex": { "pattern": "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$"} }])
 homepage.createField('module2Image').type('Link').linkType('Asset').name('module2Image').required(true);
 homepage.createField('module2ImageHeading').type('Symbol').name('Module 2 Image Heading').required(true).validations([{ "size": { "max": 60 }}]);
 homepage.createField('module2ImageText').type('Symbol').name('Module 2 Image Text').required(true).validations([{ "size": { "max": 60 }}]);

//  icontext

// testimonial
homepage.createField('quote').type('Symbol').required(true).name('Quote');
homepage.createField('author').type('Symbol').required(true).name('Author');
homepage.createField('fontColor').type('Symbol').required(true).name('Font Color').validations([{ "in": ["White", "Black"]}]);
homepage.createField('quoteBackgroundImage').type('Link').linkType('Asset').name('Quote Background Image');

// blogteaser
}