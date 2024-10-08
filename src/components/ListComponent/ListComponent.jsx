import CardComponent from '../CardComponent/CardComponent';
import { List, Flex } from 'antd';

const ListComponent = ({ data = [], getIdAndRateCard = () => {} }) => {
  return (
    <List
      grid={{
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 2,
        xxl: 2,
      }}
      dataSource={data}
      renderItem={(item) => (
        <Flex justify='center'>
          <CardComponent
            key={item.id}
            item={item}
            getIdAndRateCard={getIdAndRateCard}
          />
        </Flex>
      )}
    />
  );
};

export default ListComponent;
