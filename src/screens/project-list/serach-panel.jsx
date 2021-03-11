import React from "react";

const firstCaptial = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form>
      <div>
        {/*setParam(Object.assign({}, param, {name:evt.target.value}))*/}
        Project Name(case sensitive):
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: firstCaptial(evt.target.value),
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={""}>All Users</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
