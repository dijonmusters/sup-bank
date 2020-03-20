# Sup Bank

An expression of interest to work at Up Bank

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js

Check out the ![Node.js website](https://nodejs.org/en/download/) for download and installation instructions

### Installing

Clone the repository

```
git clone https://github.com/dijonmusters/sup-bank.git
```

Change into the directory

```
cd sup-bank
```

Install dependencies

```
npm i
```

Start development server

```
npm start
```

## Known Issues

- There are a few `high severity` npm audit vulnerabilities. If this were a production application I would remove the packages and rewrite any required functionality.
- There is also a weird bug in the Nav bar - only on light mode and production version - where the active link is always the root `/`. I have confirmed that the correct prop is making it through to the `Item` Styled Component so this would require some further investigation to solve.

## Author

**Jon Meyers** - [GitHub](https://github.com/dijonmusters)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
