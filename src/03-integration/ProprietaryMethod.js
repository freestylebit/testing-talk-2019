const Never = () => 'Never';
const Going = 'Gonna';
const GiveWho = who => `Give ${who}`;
const Up = () => 'Up';

const ProprietaryMethod = (who = 'You') => `${Never()} ${Going} ${GiveWho(who)} ${Up()}`;

// export default ProprietaryMethod;
export { ProprietaryMethod, Going };
