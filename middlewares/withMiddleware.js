import withAuthentication from './withAuthentication'
import withSession from './withSession'

const middleware = handler => withSession(withAuthentication(handler))

export default middleware
