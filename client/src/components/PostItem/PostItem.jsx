import React, { memo, useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input, ListGroupItem } from 'reactstrap';
import { deletePostAsync, updatePostAsync } from '../../redux/actions/postsActions';

function PostItem({ post, id }) {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(post.title);
  const dispatch = useDispatch();
  const changeHandler = useCallback((e) => setInput(e.target.value), []);
  console.log('Item render');
  return (
    <ListGroupItem>
      {!isEdit
      ? <div>{`${id}. ${post.title}`}</div>
      : <Input onChange={changeHandler} value={input} placeholder="..." type="text" /> }
      {isEdit
          ? <Button onClick={() => {dispatch(updatePostAsync(post, input)); setIsEdit(!isEdit)}} className="btn btn-info" type="button">Сохранить</Button>
          : <Button onClick={() => setIsEdit(!isEdit)} className="btn btn-dark" type="button">Редактировать</Button>}
      <Button onClick={() => dispatch(deletePostAsync(id))} className="danger" color="danger">Удалить</Button>
    </ListGroupItem>
  );
}

export default memo(PostItem); // HOC
