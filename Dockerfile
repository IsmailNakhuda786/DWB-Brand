FROM node:14.15-alpine as dependencies
# FROM 654491593999.dkr.ecr.ap-southeast-1.amazonaws.com/dockerfile-images:node14-alpine as dependencies
WORKDIR /my-project
COPY package.json yarn.lock ./
RUN yarn install

FROM node:14.15-alpine as builder
# FROM 654491593999.dkr.ecr.ap-southeast-1.amazonaws.com/dockerfile-images:node14-alpine as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
ENV NODE_OPTIONS=”–max_old_space_size=2048″
RUN yarn build

FROM node:14.15-alpine as runner
# FROM 654491593999.dkr.ecr.ap-southeast-1.amazonaws.com/dockerfile-images:node14-alpine as runner
WORKDIR /my-project
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]