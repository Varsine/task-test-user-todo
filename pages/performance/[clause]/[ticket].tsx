import {
  NextPage,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from 'next';

import {EventsPerformance, Seo} from '~/components';
import {PerformanceClauseDetailsContainer} from '~/containers';
import {PerformanceClauseDetailsContainerProps} from '~/containers/performance/PerformanceClauseDetails/types';

const PerformanceClauseDetailsPage: NextPage<PerformanceClauseDetailsContainerProps> =
  ({clause, ticket}) => (
    <Seo
      title="Performance clause details page"
      metaDescription="Performance clause details page description">
      <EventsPerformance clause={clause}>
        <PerformanceClauseDetailsContainer ticket={ticket} clause={clause} />
      </EventsPerformance>
    </Seo>
  );

export const getServerSideProps = (
  content: GetServerSidePropsContext,
): GetServerSidePropsResult<PerformanceClauseDetailsContainerProps> => {
  const {clause, ticket} =
    content.query as PerformanceClauseDetailsContainerProps;

  return {props: {clause, ticket}};
};

export default PerformanceClauseDetailsPage;
