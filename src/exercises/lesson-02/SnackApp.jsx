// This was not in the instructions.md, but the only way to import SnackApp into studentWork.jsx is if I create it
// imports
import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';

export default function SnackApp() {
  return (
    <>
      <div>
        <SnackHeader />
      </div>
      <div>
        <SnackList />
      </div>
      <div>
        <SnackFooter />
      </div>
    </>
  );
}
