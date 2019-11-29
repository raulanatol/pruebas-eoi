import React, { FC, useState } from 'react';
import styled from "@emotion/styled";

const LI = styled.li<any>`
  color: red;
  background: ${props => props.background};
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

interface Departamento {
  id: number;
  label: string;
}

const departamentos: Departamento[] = [
  { id: 1, label: 'Deptartamento1' },
  { id: 2, label: 'Deptartamento2' },
  { id: 3, label: 'Deptartamento3' },
  { id: 4, label: 'Deptartamento4' },
  { id: 5, label: 'Deptartamento5' },
  { id: 6, label: 'Deptartamento6' }
];

interface DepartmentElementProps {
  departamento: Departamento;
  selectMe: (idDepartamento: number) => void;
  selected?: boolean;
}

const DepartmentElement: FC<DepartmentElementProps> = ({ departamento, selected = false, selectMe }) => {
  const { id, label = 'Hola' } = departamento;
  const handleOnClick = () => selectMe(id);
  const background = selected ? '#09d3ac' : 'white';
  return <LI key={id}
             onClick={handleOnClick}
             background={background}>({id}){label}</LI>;
};

export const Sidebar: FC = () => {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState<number>();

  const selectDepartment = (id: number) => {
    setSelectedDepartmentId(id);
  };

  return <div>
    <ul>
      {departamentos.map(departamento =>
        <DepartmentElement departamento={departamento}
                           selectMe={selectDepartment}
                           selected={departamento.id === selectedDepartmentId}/>)
      }
    </ul>
  </div>
};


