import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  //  TODO: const history = useHistory() or withRouter as below
  //   import { withRouter } from 'react-router-dom'
  //   export default withRouter(SearchBox)

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button type='submit' className='p-2 c-button search-button'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
