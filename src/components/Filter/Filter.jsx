import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));

    return (
        <div>
            <Label htmlFor="filter">Find contacts by name</Label>
            <Input
                type="text"
                name="filter"
                id="filter"
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};