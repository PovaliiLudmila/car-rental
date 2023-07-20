import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <h1>Phonebook</h1>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {isLoading ? null : <Filter />}
      <ContactList />
    </div>
  );
};

export default App;