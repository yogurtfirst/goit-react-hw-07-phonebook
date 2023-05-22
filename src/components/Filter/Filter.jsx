import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = ({ target: { value } }) => dispatch(changeFilter(value));

    return (
        <Wrapper>
            <Label htmlFor="filter">Search</Label>
            <Input
                type="text"
                name="filter"
                id="filter"
                value={filter}
                onChange={handleChange}
            />
        </Wrapper>
    );
};