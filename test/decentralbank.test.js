const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank")

require("chai")
.use(require("chai-as-promised"))
.should();

contract("DecentralBank", ([owner, customer]) =>{
    let tether, rwd, decentralBank;

    function tokens(number) {
        return web3.utils.toWei(number, "ether");
    }

    before(async () => {
        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await DecentralBank.new(rwd.address, tether.address);

        await rwd.transfer(decentralBank.address, tokens("1000000"));

        // Transfer 100 mock tethers to investor
        await tether.transfer(customer, tokens("100"), {from: owner})
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
        it('should match name successfully ', async ()  => {
            const name =  await decentralBank.name();
            assert.equal(name, "Decentral Bank");
        });
        it('contract has token ', async ()  => {
            const balance = rwd.balanceOf(decentralBank.address);
            assert.equal(balance, tokens("1000000"));
        });
    })
} )