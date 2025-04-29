import Header from '@/components/Header/Header';
import MainNav from '../Navigation/MainNav';
import SecondaryNav from '../Navigation/SecondaryNav';
import ApparatusCarousel from './ApparatusCarousel/ApparatusCarousel';
import DesktopResultsTable from './Results/DesktopResultsTable';
import { sampleApparatus, sampleMainNav, sampleResults, sampleSecondaryNav } from '@/data/Gym.sammpledata';
import MobileResultsList from './Results/MobileResultsList';

export default function GymnasticsResults() {
	return (
		<div className="min-h-screen bg-[#080915] text-white p-3 md:p-6">
			<div className="max-w-7xl mx-auto">
				<Header
					title="FIG ARTISTIC GYMNASTICS WORLD CUP"
					location="Doha, Qatar"
					dateRange="12/03/2023 – 13/02/2023"
				/>
				<MainNav items={sampleMainNav} />
				<SecondaryNav items={sampleSecondaryNav} />
				<ApparatusCarousel items={sampleApparatus} />
				<MobileResultsList rows={sampleResults} />
				<DesktopResultsTable rows={sampleResults} />
			</div>
		</div>
	);
}
