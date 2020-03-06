# ERC721 (Burrow TS)

## Install

```shell
npm install
npm install -g ts-node
```

```shell
burrow spec -v1 | burrow configure -s- | burrow start -c-
```

## Compile

```shell
npm run build
```

## Test

```shell
npm test
```

## Tasks

### 1. Mintable

Expose some way to mint token. 

Considerations:
- Restrictions
- Visibility

### 2. Burnable

Allow an account to destroy an owned token by id.

### 3. Enumerable

Enable a user to list tokens by owner or id.

Considerations:
- Performance