##Read in data
pm25_sum <- readRDS("summarySCC_PM25.rds")
pm25_srccls <- readRDS("Source_Classification_Code.rds")

##Baltimore subset
balt_sub <- subset(pm25_sum, fips == "24510")

##subset by year and type with a sum of emissions
balt_type_sub <- ddply(balt_sub, .(year, type), function(x) sum(x$Emissions))

##rename third column emissions
colnames(balt_type_sub)[3] <- "Emissions"

##plot Baltimore emission trends by type between 1999-2008
qplot(year, Emissions, data = balt_type_sub, color = type, geom = "line") + labs(title = "Baltimore PM2.5 Emissions by Type, Year", x = "Year", y = "PM2.5 Emissions")