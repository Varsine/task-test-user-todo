import {NextPage} from 'next';

// import {PerformanceContainer} from '~/containers';
import {EventsPerformance, Seo} from '~/components';

const PerformancePage: NextPage = () => (
  <Seo title="Performance page" metaDescription="Performance page description">
    <EventsPerformance>{/* <PerformanceContainer /> */}</EventsPerformance>
  </Seo>
);

export default PerformancePage;
