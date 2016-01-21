FROM nodejs

ENV TEST_FRMWRK_DIR /root/.node_modules
ENV TEST_FRMWRK_DOC_DIR ${TEST_FRMWRK_DIR}/doc
ENV TEST_DIR /test
ENV SCRIPTS /scripts
ENV PATH ${TEST_DIR}:${SCRIPTS}:${PATH}
RUN mkdir -p ${TEST_DIR}               \
    && mkdir -p ${TEST_FRMWRK_DIR}     \
    && mkdir -p ${TEST_FRMWRK_DOC_DIR} \
    && mkdir -p ${SCRIPTS}

ENTRYPOINT ["startup.sh"]

RUN npm install q

COPY ./TstFrmwrk/* ${TEST_FRMWRK_DIR}/
#COPY ./test/*      ${TEST_DIR}/
COPY ./scripts/*   ${SCRIPTS}/


