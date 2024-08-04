import { handleGame } from '@/lib/functions/handleGame';

export default function GamePage() {
    handleGame('easy');

    return <div>GamePage</div>;
}
