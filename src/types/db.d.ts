import type { Post, Subreddit, User, Vote, Comment } from '@prisma/client'

export type ExtendedPost = Post & {
  subreddit: Subreddit
  votes: Vote[]
  author: User
  comments: Comment[]
}

// PLANETSCALE DB PASSWORD NAME
// USERNAME: mw12cmec68kvcdmkvgpi
// PASSWORD: pscale_pw_dEYEpr2jQ9VCT6o9LRvChAtYElnLfSzvC3SHS0LEzQS