# Use an official Node runtime as a parent image
FROM timbru31/node-chrome:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json yarn.lock ./

# Install any needed packages
RUN yarn install

# Bundle app source inside the Docker image
COPY . .

RUN yarn tsc

# Make port 3069 available to the world outside this container
EXPOSE 3069

# Run the app when the container launches
CMD ["yarn", "start:server"]
