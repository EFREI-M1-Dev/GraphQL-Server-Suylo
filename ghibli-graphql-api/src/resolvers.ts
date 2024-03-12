import {Resolvers} from "./types.js";

export const resolvers: Resolvers = {
	Query: {
		getFilms: (parent, args, {dataSources}) => {
			return dataSources.ghibliAPI.getFilms()
		},
		getPeople: (parent, args, {dataSources}) => {
			return dataSources.ghibliAPI.getPeople()
		}
	},
	Film: {
		people: (parent, _, {dataSources}) => {
			let newPeopleList = [];
			parent.people.forEach(personURL => {
				if (personURL.split('/').pop() !== '') {
					let personInfo = dataSources.ghibliAPI.getPersonBy(personURL.split('/').pop());
					newPeopleList.push(personInfo);
				}
			});
			return newPeopleList;
		}
	},

	People: {
		eyeColor: ({eye_color}) => eye_color,
		films: (parent, _, {dataSources}) => {
      let newFilmsList = [];
      parent.films.forEach(filmURL => {
        if (filmURL.split('/').pop() !== ''){
          let filmInfo = dataSources.ghibliAPI.getFilmBy(filmURL.split('/').pop());
          newFilmsList.push(filmInfo);
        }
      });
      return newFilmsList;
		}
	},
}