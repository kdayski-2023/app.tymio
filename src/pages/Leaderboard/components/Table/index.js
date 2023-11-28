import { HeadTr, Table, Tbody, Td, Th, Thead, Tr, TFooter } from './styled';

const all = Table;

all.Body = Tbody;
all.Td = Td;
all.Tr = Tr;
all.Th = Th;
all.Head = Thead;
all.Head.Tr = HeadTr;
all.Footer = TFooter;

export { Table, Tbody, Td, Tr, Th, Thead, HeadTr, TFooter };
