Develop a Twitter clone with the following features: 
1. A User should be able to signup/signin 
2. A user should be able to see tweets by others on their homepage.
3. A User should be able to compose a tweet after signing into their account.
4. A User should be able to comment on a tweet. 
5. A User should be able to re-tweet. 


Tech to be used: 
1. NodeJS with Apollo GraphQL 
2. MongoDB with Mongoose
3. ReactJS 
4. Styled Components (CSS-in-JS) 
5. JWT Authentication 
6. Docker


Followup discussion:
- How to implement: follows, tags, caching


Steps:
- Determine data model
- Determine API shape
- Setup Apollo server and Mongoose backend
- Create data model for tweets and users
- Create APIs for /feed, /createTweet, /createComment, /createRetweet
- Setup React app
- Create Twitter frontend
  - Show feed
  - Create tweet
  - Create comment
  - Retweet
- Add auth


Notes:
- First implementation uses css-modules instead of styled-components
- Not implemented: retweets, JWT authentication, docker
