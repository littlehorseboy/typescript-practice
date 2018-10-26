import { Mediator } from './Mediator';

const mediator = new Mediator();

mediator.person1.told('some');

mediator.person2.told('thing');

mediator.talkTo('Amy', '告訴你喔');

mediator.person1.blameSomeOne('');
