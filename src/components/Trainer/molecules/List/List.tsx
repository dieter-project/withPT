interface ListItemProps {
  content: {
    title: string;
    memberName?: string;
    icon?: {
      name: string;
      color?: string;
    };
  };
  time?: string;
  status?: string;
  onClick?: () => void;
}

interface ListProps {
  items: {
    content: {
      title: string;
      memberName?: string;
      icon?: {
        name: string;
        color?: string;
      };
    };
    time?: string;
    status?: string;
  }[];
  onItemClick?: (item: ListItemProps, index: number) => void;
}

const ListItem = ({ content, time, status, onClick }: ListItemProps) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      {/* 기존 ListItem 내용 */}
    </div>
  );
};

// List 컴포넌트
const List = ({ items, onItemClick }: ListProps) => {
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, index) => (
        <ListItem
          key={index}
          {...item}
          onClick={() => onItemClick?.(item, index)}
        />
      ))}
    </div>
  );
};

export { List };
