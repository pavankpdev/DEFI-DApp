const {before} = require("truffle/build/484.bundled");
const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank")

require("chai")
.use(require("chai-as-promised"))
.should();

contract("DecentralBank", accounts =>{
    let tether, rwd, decentralBank;

    before(async () => {
        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await  DecentralBank.new();
    })

    describe("Mock Tether Deployment" , async  () => {
        it('should match name successfully ', async ()  => {
            const name =  await tether.name();
            assert.equal(name, "Tether");
        });
        it('should match name successfully ', async ()  => {
            const name =  await rwd.name();
            assert.equal(name, "Reward Token");
        });
    })
} )