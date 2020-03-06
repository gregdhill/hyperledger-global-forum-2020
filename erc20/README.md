# ERC20 (Truffle)

## Install

```shell
npm install
npm install -g truffle
```

```shell
burrow spec -v1 -d2 | burrow configure -s- --curve-type secp256k1 | burrow start -c-
```

## Test

```shell
truffle test
```

## Tasks

### 1. Mintable

Expose some way to mint token.

Considerations:
- Restrictions
- Visibility

### 2. Burnable

Allow an account to destroy some amount of their token.

### 3. Capped

Add a limit to the total supply of tokens.
