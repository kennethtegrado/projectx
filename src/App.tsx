// Component Import
import { DashboardLayout } from '@/components/layout';
import { DeliveryReceipt } from '@/components/pages';

// style imports
import './normalize.css';
import './globals.css';

function App() {
    return (
        <DashboardLayout>
            <DeliveryReceipt />
        </DashboardLayout>
    );
}

export default App;
