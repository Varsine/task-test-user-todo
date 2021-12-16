import {
  NextPage,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from 'next';

import {EventsPerformance, Seo} from '~/components';
import {PerformanceClauseContainer} from '~/containers';
import {PerformanceClauseContainerProps} from '~/containers/performance/PerformanceClause/types';

const PerformanceClausePage: NextPage<PerformanceClauseContainerProps> = ({
  clause,
}) => (
  <Seo
    title="Performance clause page"
    metaDescription="Performance clause page description">
    <EventsPerformance clause={clause}>
      <PerformanceClauseContainer clause={clause} />
    </EventsPerformance>
  </Seo>
);

export const getServerSideProps = (
  content: GetServerSidePropsContext,
): GetServerSidePropsResult<PerformanceClauseContainerProps> => {
  const clause = content.query
    .clause as PerformanceClauseContainerProps['clause'];

  return {props: {clause}};
};

export default PerformanceClausePage;
