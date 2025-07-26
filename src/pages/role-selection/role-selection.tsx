import { RoleSelectionView } from './role-selection-view';
import { useRoleSelection } from './use-role-selection';

export const RoleSelection = () => {
  const logic = useRoleSelection();
  return <RoleSelectionView {...logic} />;
};
