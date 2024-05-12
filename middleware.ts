import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)', //. means any character, * means any number of times meeting121 343
]);
export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
