FROM nodejs

# Expose the ports needed to permit the Chrome browser to connect to
# node-inspector debugging session.
EXPOSE 8080
EXPOSE 5858

# Install python & build-base to provide dependencies needed to compile native
# addon modules for Node.js by node-gyp.  node-gyp is a optional dependency
# for node-inspector.  These dependencies bloat the image by ~120mb.
# Note, node-gyp requries python 2.7.
RUN apk add --update python=2.7.10-r1
RUN apk add --update build-base

# Install node-insepctor as debugger
RUN npm install -g node-inspector


