import { Button } from '@/components/ui/button';
import CreateStudent from '../student/CreateStudent';
import ViewStudents from '../student/ViewStudents';

const sidebarItems: { name: string; component: React.ReactNode }[] = [
  {
    name: 'View Students',
    component: <ViewStudents />,
  },
  {
    name: 'Student Create',
    component: <CreateStudent />,
  },
];

const StudentSidebar = ({
  mainComponent,
  setMainComponent,
}: {
  mainComponent: React.ReactNode;
  setMainComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {sidebarItems.map((item) => (
        <Button
          key={item.name}
          onClick={() => {
            if (mainComponent === item.component) {
              setMainComponent(null);
            } else {
              setMainComponent(item.component);
            }
          }}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default StudentSidebar;
