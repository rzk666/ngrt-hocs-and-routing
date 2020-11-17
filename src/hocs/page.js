import WithLogger from './WithLogger';
import WithLayout from './WithLayout';
import WithAuth from './WithAuth';

const page = (Component) => (
  WithLogger(WithLayout(WithAuth(Component)))
);

export default page;
