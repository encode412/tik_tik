import post from './schemas/post'
import postedBy  from './schemas/postedBy'
import comment  from './schemas/comment'
import user  from './schemas/user'

export const schema = {
  types: [post, postedBy, comment, user],
}
