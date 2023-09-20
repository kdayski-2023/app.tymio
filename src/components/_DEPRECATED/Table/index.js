import { HeadTr, Table, Tbody, Td, Th, Thead, Tr } from './styled';

const all = Table;

all.Body = Tbody;
all.Td = Td;
all.Tr = Tr;
all.Th = Th;
all.Head = Thead;
all.Head.Tr = HeadTr;

export default all;
