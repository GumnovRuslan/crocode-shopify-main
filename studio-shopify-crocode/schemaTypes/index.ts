// documents
import articlesItem from './documents/articlesItem'

// objects
import link from './objects/link'
import linkInternal from './objects/linkInternal'
import linkExternal from './objects/linkExternal'
import socialIconItem from './objects/socialIcons'
import seo from './objects/seo'
import technologiesArray from './objects/technologiesArray'
import cookies from './objects/cookies'
import imageWithAlt from './block/imageWithAlt'
import Blogs from './documents/blogs'

// blocks

//other
import {technologiesItem} from './objects/technologiesArray'

export const schemaTypes = [
  // documents
  articlesItem,
  Blogs,

  // objects
  link,
  linkInternal,
  linkExternal,
  socialIconItem,
  seo,
  technologiesArray,
  cookies,

  // blocks
  imageWithAlt,

  //other
  technologiesItem,
]