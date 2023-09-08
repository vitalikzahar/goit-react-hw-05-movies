import { GrSearch } from 'react-icons/gr';

export const FormItem = ({ changeQuery }) => {
  const onSubmit = evt => {
    evt.preventDefault();
    changeQuery(evt.target.elements.query.value);

    evt.target.reset();
  };
  return (
    <form
      onSubmit={evt => {
        onSubmit(evt);
      }}
    >
      <input type="text" name="query" placeholder="Search films " />
      <button type="submit">
        <span>
          <GrSearch />
        </span>
      </button>
    </form>
  );
};
